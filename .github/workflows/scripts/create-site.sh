#!/bin/bash

source $(dirname "$0")/acquia-helper.sh

echo "!---===== Starting creation new site duplicate for the branch: "$BRANCH" =====---!";

IFS='/';
read -a branch_parts <<< "$BRANCH";
ENV="${branch_parts[1]}";
SITE_NAME="${branch_parts[2]}";
EPIC_ID="${branch_parts[3]}";
RELEASE="${branch_parts[4]/-build/}";

echo "!---===== Initial data site name: "$SITE_NAME" and Epic ID: "$EPIC_ID" =====---!";

if [[ ! -z "${branch_parts[5]}" ]]
then 
  echo "!---===== Feature branches doesn't create environment =====---!";
  exit 0
fi

discover_collection
if [[ "$RELEASE" == 'main' ]]
then
  duplicate_site
  get_site_data
  deploy_new_site_version
else
  stored_release=$RELEASE;
  RELEASE='main';
  find_site_inside_collection
  if [[ ! -z "$site_id" ]]
  then
    primary_site=$site_id;
  fi
  RELEASE=$stored_release;
  duplicate_site
  get_site_data
  deploy_new_site_version
fi
