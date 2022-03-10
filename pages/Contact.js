import {useState} from "react";
import {useGetBlogsPages} from "../actions/pagination";
import PageLayout from "../components/Layout";
import FilteringMenu from "../components/FilteringMenu";
import {Button, Row} from "react-bootstrap";
import {getPaginatedBlogs} from "../lib/api";

export default function Contact() {
    return (
        <PageLayout>
            <h1>I will add contact page soon</h1>
        </PageLayout>
    )
}

