#!/bin/sh
rm -rf dist && npm run build && cd dist/ && zip -rq email.zip .

aws lambda update-function-code \
  --function-name emailLambda \
  --zip-file fileb://email.zip \
  --region us-east-1

rm email.zip