// src/Blog.jsx
import {Routes, Route, useParams} from "react-router-dom";
import styled from "styled-components";
import Header from "./components";

const Content = styled.div`
    text-align: center;
`;

const Footer = () => <footer>Футер</footer>;

const HomePage = () => <div>Главная страница</div>;
const LoginPage = () => <div>Вход</div>;
const RegisterPage = () => <div>Регистрация</div>;
const UsersPage = () => <div>Пользователи</div>;
const NewPostPage = () => <div>Новая статья</div>;
const NotFoundPage = () => <div>Ошибка: страница не найдена</div>;

const PostPage = () => {
    const {postId} = useParams();
    return <div>Статья {postId}</div>;
};

export default function Blog() {
    return (
        <>
            <Header/>
            <Content>
                <h2>Контент страницы</h2>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/post" element={<NewPostPage/>}/>
                    <Route path="/post/:postId" element={<PostPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            <Footer/>
        </>
    );
}
