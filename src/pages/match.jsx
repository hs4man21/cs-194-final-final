import React from "react";
import NeedStudentAccountNotice from "../components/need-student-account-notice";
import Layout from "../components/layout";

const MatchPage = ({ token, setController }) => {
    return token.slice(-2) === ",1" ? (
        <Layout setController={setController}>
        <div>Yeet</div>
        </Layout>
    ) : <Layout setController={setController}><NeedStudentAccountNotice /></Layout>;
}

export default MatchPage;