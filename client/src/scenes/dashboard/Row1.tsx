import DashboardBox from "../../components/DashboardBox.tsx";
import { useGetKpisQuery } from "../../state/api.ts";

const Row1 = () => {

    const { data } = useGetKpisQuery();

    return (
        <>
            <DashboardBox gridArea={"a"}/>
            <DashboardBox gridArea={"b"}/>
            <DashboardBox gridArea={"c"}/>
        </>
    )
}

export default Row1;