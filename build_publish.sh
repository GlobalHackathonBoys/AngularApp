#!/bin/bash

cd Habitat

bucket="hackathon-website-test"

### Build
npm install
ng build --prod

### Upload
aws s3 cp --recursive dist/Habitat/ s3://hackathon-website-test