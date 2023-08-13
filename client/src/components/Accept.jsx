import { useState } from 'react';
import { AcceptHosted } from 'react-acceptjs';

const Accept = ({ formToken } ) => {
    const [response, setResponse] = useState('');
    return formToken ? (
      <AcceptHosted
        formToken={formToken}
        integration="iframe"
        onTransactionResponse={(response) =>
          setResponse(JSON.stringify(response, null, 2) + '\n')
        }
      >
        <AcceptHosted.Button className="btn btn-primary" style={{position: "absolute",height:"100px"}}>
          Continue to IFrame
        </AcceptHosted.Button>
        <AcceptHosted.IFrameBackdrop />
        <AcceptHosted.IFrameContainer>
          <AcceptHosted.IFrame />
        </AcceptHosted.IFrameContainer>
      </AcceptHosted>
    ) : (
      <div>
        You must have a form token. Have you made a call to the
        getHostedPaymentPageRequestAPI?
      </div>
    );
  };
  
  export default Accept;