import * as React from 'react'
import { useAsync } from "react-async"
import { request } from "@octokit/request"
import { Buffer } from 'buffer'
import { load } from 'js-yaml'
import { data } from 'autoprefixer'

const fetchToolFromGitHub = async ({ id }) => {    

    try {
      const result = await request(`GET /repos/FuReSH/Werkzeugregal/contents/Werkzeuge/${id}.yml?ref=main`, {
        owner: "FuReSH",
        repo: "Werzeugregal",
        path: `Werkzeuge/${id}.yml`
      })

      const content = load((Buffer.from(result.data.content, 'base64')).toString())

      return content

    } catch (e) {
      console.log(e)
    }
}

const Tool = ({ id }) => {
    
  const { data, error } = useAsync({ promiseFn: fetchToolFromGitHub, id })

  if (error) return error.message
  
  if (data) return <pre>
  <code>
    {data['name']}
    <br />
    {data['wikidataId']}
  </code>
</pre>
  
  return null

}

const SetCard = () => {
    return <Tool id={'docker'} />

}

export default SetCard