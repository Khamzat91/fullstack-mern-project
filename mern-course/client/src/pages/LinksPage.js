import React, { useCallback, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import LinksList from "../components/LinksList";

export const LinksPage = () => {
  const [links, setLinks] = React.useState([]);
  const { token } = useContext(AuthContext);
  const { loading, request } = useHttp();

  const fetchLinks = useCallback(async () => {
    try {
      const feched = await request("/api/link/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(feched);
    } catch (e) {}
  }, [loading, request]);

  React.useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  return <div>{!loading && <LinksList links={links}/>}</div>;
};
