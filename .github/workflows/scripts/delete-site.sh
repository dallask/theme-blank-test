#!/bin/bash

source $(dirname "$0")/acquia-helper.sh

IFS='/';
read -a branch_parts <<< "$BRANCH";
ENV="${branch_parts[1]}";
SITE_NAME="${branch_parts[2]}";
EPIC_ID="${branch_parts[3]}";
RELEASE="${branch_parts[4]/-build/}";

echo "!---===== Deleting site: "$SITE_NAME$EPIC_ID" =====---!";

if [[ ! -z "${branch_parts[5]}" ]]
then 
  echo "!---===== Feature branches doesn't have environment =====---!";
  exit 0
fi

find_site
delete_site
