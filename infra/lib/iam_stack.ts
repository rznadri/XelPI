import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class IamStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        
        const role = new cdk.aws_iam.Role(this, 'LambdaRole', {
            path: '/',
            roleName: 'testIamStack',
            assumedBy: new cdk.aws_iam.ServicePrincipal('lambda.amazonaws.com'),
            description: 'Role that is used by the lambda function'
        });
        role.addManagedPolicy(
            cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')
        );
    }
}