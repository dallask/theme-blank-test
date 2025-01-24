#!/bin/bash

# Find collection and return primary site ID for this collection
function discover_collection
{
  echo "!---===== Search through collections for the site: "$SITE_NAME" =====---!";
  
  collections_list=$(curl "$SF_URL/api/v1/collections?limit=1000" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.collections');
  collection_domain=$SITE_NAME${SF_URL/https:\/\/www/''}
  collection=$(jq -r ".[] | select(.internal_domain == \"$collection_domain\")" <<< $collections_list);
  echo $collection;
  collection_id=$(jq -r '.id' <<< $collection);
  primary_site=$(jq -r '.primary_site' <<< $collection);

  echo "!---===== Found primary site ID $primary_site. =====---!";
}

# Duplicate primary site
function duplicate_site
{
  echo "!---===== Creating duplicate from site: "$primary_site" =====---!";

  duplicate_site=$(curl "$SF_URL/api/v1/sites/$primary_site/duplicate" -s -u $SF_USER_NAME:$SF_TOKEN  -X POST -H 'Content-Type: application/json' -d "{\"site_name\": \"$SITE_NAME$EPIC_ID$RELEASE\", \"exact_copy\": true}");
  echo $duplicate_site;
  new_site=$(jq -r '.id' <<< $duplicate_site);
}

# Deploy for new site new site version.
function deploy_new_site_version
{
  echo "!---===== Deploy branch $BRANCH to newly created site =====---!";

  repo=$(curl "$SF_URL/api/v1/sites/$primary_site" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.external_theme.vcs_url' | xargs);
  change_theme_result=$(curl "$SF_URL/api/v1/sites/$new_site/external-theme" -s -u $SF_USER_NAME:$SF_TOKEN  -X PUT -H 'Content-Type: application/json' -d "{\"vcs_url\": \"$repo\", \"vcs_path\": \"$BRANCH\"}");
  echo $change_theme_result;
}

# Get site name
function get_site_data
{
  echo "!---===== Waiting for new site to be ready =====---!";

  status=422
  while [[ "$status" -ne 200 ]]; do
    status=$(curl "$SF_URL/api/v1/sites/$new_site" -o /dev/null -w "%{http_code}" -s -u $SF_USER_NAME:$SF_TOKEN);
    echo "!---===== Site not ready yet =====---!";
    sleep 10;
  done

  echo "!---===== New site ready =====---!";
  site_info=$(curl "$SF_URL/api/v1/sites/$new_site" -s -u $SF_USER_NAME:$SF_TOKEN);
  echo $site_info;
}

# Search for the site incide collection.
function find_site_inside_collection
{
  echo "!---===== Search for the site inside collection: "$collection_id" =====---!";
  sites=$(curl "$SF_URL/api/v1/collections/$collection_id" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.sites[]');
  IFS=$'\n' read -rd '' -a sites_list <<< "$sites"
  for site in ${sites_list[@]}; do
    site_name=$(curl "$SF_URL/api/v1/sites/$site" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.site' | xargs);
    if [[ "$site_name" == "$SITE_NAME$EPIC_ID$RELEASE" ]]
    then
      site_id=$(curl "$SF_URL/api/v1/sites/$site" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.id');
    fi
  done
  echo "!---===== Found site ID $site_id. =====---!";
}

# Search for the site incide Site Factory.
function find_site_inside_sf
{
  echo "!---===== Search for the site "$SITE_NAME$EPIC_ID$RELEASE" inside whole Site Factory =====---!";
  sites=$(curl "$SF_URL/api/v1/sites?limit=1000" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.sites');
  sf_domain=$SITE_NAME$EPIC_ID$RELEASE${SF_URL/https:\/\/www/''}
  site=$(jq -r ".[] | select(.domain == \"$sf_domain\")" <<< $sites);
  echo $site;
  site_id=$(jq -r '.id' <<< $site);
  site_collection=$(jq -r '.site_collection' <<< $site);
  echo "!---===== Found site ID $site_id inside collection $site_collection. =====---!";
}

# Find collection and return its ID.
function find_site
{
  echo "!---===== Search through collections for the site: "$SITE_NAME" =====---!";
  sites_list=$(curl "$SF_URL/api/v1/sites?limit=1000" -s -u $SF_USER_NAME:$SF_TOKEN | jq '.sites');
  site=$(jq -r ".[] | select(.site == \"$SITE_NAME$EPIC_ID$RELEASE\")" <<< $sites_list);
  echo $site;
  site_id=$(jq -r '.id' <<< $site);
  echo "!---===== Found site ID $site_id. =====---!";  # find_site_inside_collection
}

# Delete old site with approved data.
function delete_site
{
  delete_site_result=$(curl "$SF_URL/api/v1/sites/$site_id" -v -u $SF_USER_NAME:$SF_TOKEN  -X DELETE);
  echo $delete_site_result;
}
