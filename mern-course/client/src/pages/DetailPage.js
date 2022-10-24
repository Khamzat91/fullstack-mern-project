import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader"

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const [link, setLink] = React.useState(null);
  const { request, loading } = useHttp();
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
     const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched)
    } catch (e) {}
  }, [token, linkId, request]);

  React.useEffect(() => {
   getLink() 
  }, [getLink])

  if (loading) {
    return <Loader/>
  }

  return (
    <div>
      
      {!loading && link && <LinkCard/>}
    </div>
  );
};
