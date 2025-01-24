#!/bin/bash

# Installation of a diffy.phar.
wget https://github.com/DiffyWebsite/diffy-cli/releases/latest/download/diffy.phar
chmod a+x diffy.phar
cp diffy.phar /usr/local/bin/diffy

# Authorisation.
diffy auth:login $DIFFY_API_KEY

# Get API token.
DIFFY_API_TOKEN=$(curl -X POST "$DIFFY_API_URL/auth/key" -H "accept: application/json" -d '{"key":"'$DIFFY_API_KEY'"}')
DIFFY_API_TOKEN=$(echo $DIFFY_API_TOKEN | jq -r '.token')

# Compare two environments.
DIFFY_DIFF_ID=`diffy project:compare $DIFFY_PROJECT_ID $DIFFY_ENV1 $DIFFY_ENV2`
echo "Diff started: $DIFFY_DIFF_ID"

# Get link to diff.
DIFFY_DIFF_LINK=$(curl -X GET "$DIFFY_API_URL/diffs/$DIFFY_DIFF_ID" -H "accept: application/json" -H "Authorization: Bearer $DIFFY_API_TOKEN")
DIFFY_DIFF_LINK=$(echo $DIFFY_DIFF_LINK | jq -r '.diffSharedUrl')
echo "Link to diff: $DIFFY_DIFF_LINK"

# Set ENV variables.
echo "DIFFY_DIFF_ID=$DIFFY_DIFF_ID" >> $GITHUB_ENV
echo "DIFFY_DIFF_LINK=$DIFFY_DIFF_LINK" >> $GITHUB_ENV
