#!/bin/bash

source $(dirname "$0")/acquia-helper.sh

echo "!---===== Starting creation new site duplicate for the branch: "$BRANCH" =====---!";

IFS='/';
read -a branch_parts <<< "$BRANCH";
ENV="${branch_parts[1]}";
SITE_NAME="${branch_parts[2]}";
EPIC_ID="${branch_parts[3]}";
RELEASE="${branch_parts[4]/-build/}";

echo "!---===== Checking site connected theme branch... =====---!";

find_site
site_info=$( curl "$SF_URL"/api/v1/sites/"$site_id" -v -u "$SF_USER_NAME":"$SF_TOKEN" )
theme_branch=$( jq -r  '.external_theme.vcs_path' <<< "${site_info}" )

echo "!---===== Connected site theme branch: "${theme_branch} "=====---!";

echo "!---===== Starting refresh theme request for ACSF Instance $site_id. =====---!";

theme_refresh_info=$( curl "$SF_URL"/api/v1/sites/"$site_id"/external-theme-refresh -X POST -H 'Content-Type: application/json' -v -u "$SF_USER_NAME":"$SF_TOKEN" )
theme_refresh_result=$( jq -r  '.accepted' <<< "${theme_refresh_info}" )

if [ ${theme_refresh_result} = true ]
  then
    echo "!---===== Theme refresh initiated successfully =====---!";
    echo "!---===== Allow five minutes for theme refresh process to finish, then clear cache. =====---!";
    sleep 300s

    cache_clear_info=$( curl "$SF_URL"/api/v1/sites/"$site_id"/cache-clear -X POST -H 'Content-Type: application/json' -v -u "$SF_USER_NAME":"$SF_TOKEN" )
    cache_clear_result=$( jq -r  '.id' <<< "${cache_clear_info}" )

    if [ ${cache_clear_result} ]
      then
        echo "!---===== Cache clear triggered successfully =====---!";
    fi
  else
    echo "!---===== Theme refresh failed to initiate =====---!";
fi
