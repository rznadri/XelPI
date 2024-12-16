#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaStack } from '../lib/lambda_stack';
import { IamStack } from '../lib/iam_stack';

const app = new cdk.App();
new LambdaStack(app, 'LambdaStack', {
  env: { account: '529385528489', region: 'us-east-1' }
});

new IamStack(app, 'IamStack', {
  env: { account: '529385528489', region: 'us-east-1' }
});

