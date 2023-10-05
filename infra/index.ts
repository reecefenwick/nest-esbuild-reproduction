import { App, Stack } from 'aws-cdk-lib';
import { LogLevel, NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

const app = new App();

class MyStack extends Stack {

  constructor(scope: Construct, id:string) {
    super(scope, id);

    new NodejsFunction(this, 'MyFunction', {
      bundling: {
        logLevel: LogLevel.WARNING,
        target: 'node18',
        externalModules: [
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets/socket-module',
        ],
      },
      entry: 'build/src/index.js',
      runtime: Runtime.NODEJS_18_X,
      handler: 'handler',
      functionName: 'my-function',
    });
  }
}

new MyStack(app, 'MyStack');
