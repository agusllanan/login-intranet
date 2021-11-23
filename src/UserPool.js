import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_wfNQ3gVPd",
  ClientId: "4t4svj5i9p3pa8kh98p27isr12",
};

export default new CognitoUserPool(poolData);
