import { RootPage } from "@/pages/RootPage";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { createBrowserRouter } from "react-router-dom";

interface RouterBase {
    id: number; // 페이지 아이디 (반복문용 고유값)
    path: string; // 페이지 경로
    label: string; // 사이드바에 표시할 페이지 이름
    element: React.ReactNode; // 페이지 엘리먼트
}

const routerData: RouterBase[] = [
    {
        id: 0,
        path: "/",
        label: "root",
        element: <RootPage />,
    },
];

export const routers: RemixRouter = createBrowserRouter(
    routerData.map((router) => {
        return {
            path: router.path,
            element: router.element,
        };
    }),
    { basename: "/legacy_portfolio" }
);
