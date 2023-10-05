# Instructions

**Install Dependencies**
`yarn install`

**Build the project**
`yarn synth` - this will:
* compile the typescript src, the resulting javascript will be in the `build` directory
* run CDK synth to bundle the lambda function using esbuild, it references `build/src/index.js` as it's entrypoint
  * this will output a bundle under cdk.out/asset.123456789/index.js

**Run the service**

`node cdk.out/asset.123456789/index.js`
* Node the asset directory filename changes on every build

**Test the app**

Go to http://localhost:3000/api/hello

**Expected Result**

The endpoint should return "world"
