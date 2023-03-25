import * as React from "react"
import Layout from '../components/layout.js'
import Blob from '../components/blob.js'
import { pageText } from '../components/layout.module.css'

const IndexPage = () => {
  return(
    <Layout pageTitle="ArnavK.co">
    </Layout>
  );
};
const BlobContent = () => {
  return (
    <Blob insideText="An infrastructure engineer always keen on making complex systems simpler">
    </Blob>
  );
};
const ParaAfterBlob = () => {
  return (
  <p className={pageText}>Hey I'm Arnav, a tech fanatic and infrastructure engineer based in Bangalore.
  I'm currently working at Rippling in the Developer Experience team, freeing up smart people to work on hard problems.</p>
  );
};
const App = () => {
  return (
    <div>
      <IndexPage />
      <BlobContent />
      <ParaAfterBlob />
    </div>
  );
};
export const Head = () => <title >Arnav Kumar|Infrastructure Engineer</title>

// export default { IndexPage, BlobContent};
export default App;
// export default IndexPage;
