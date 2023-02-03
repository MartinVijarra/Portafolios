import { Layout } from "../../Layouts/Layout"
import JobsBg from "../../Assets/jobs-bg.png"
import "../../Style/Jobs.css"

function Jobs() {
  return (
    <Layout>
        <img src={JobsBg} alt="Jobs Background" id="svg3"></img>
        <div>Jobs</div>
    </Layout>
  )
}

export default Jobs