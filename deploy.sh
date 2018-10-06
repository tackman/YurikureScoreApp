#!/bin/sh
aws s3 rm s3://yurikure.wr-inst.org/app --recursive
aws s3 cp dist/  s3://yurikure.wr-inst.org/app --recursive --exclude "*" --include "*.html"   --cache-control no-store --acl public-read
aws s3 cp dist/  s3://yurikure.wr-inst.org/app --recursive --exclude "*" --include "*.js"   --cache-control no-store --acl public-read
aws s3 cp dist/  s3://yurikure.wr-inst.org/app --recursive --exclude "*" --include "*.png"   --cache-control no-store --acl public-read
aws s3 cp dist/  s3://yurikure.wr-inst.org/app --recursive --exclude "*" --include "*.css"   --cache-control no-store --acl public-read
aws cloudfront create-invalidation --distribution-id $CLOUDFRONTID --paths "/app/*"
