import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const environment = {
      MY_VAR: '1',
    };

    const helloFunction = new NodejsFunction(this, 'function', {
      entry: path.join(__dirname, '../../lambda/index.ts'),
      handler: 'handler',
      environment: {
        ...environment
      }
    });
    

    // TODO add deployment to github actions
    // TODO add tsoa 
    // TODO add ecs/ecr with tsoa support 
    
  }
}

