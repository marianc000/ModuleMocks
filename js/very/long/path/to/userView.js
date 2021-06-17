import { getUser } from "shared/dataSource.js";

export default async function getHomeView() {
    const user = await getUser();
    return `Hello ${user.name}`;
}