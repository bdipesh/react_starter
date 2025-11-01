import DynamicIcon from "@/components/Common/DynamicIcon.tsx";

type Props = {
    iconName: string;
    text: string;
    value: number;
}


const Stats = ({data}: {data: Props}) => {
    return (
        <>
            <div className="shadow-sm bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-semibold">
                        {data.value}
                    </div>
                    <div>
                        <DynamicIcon iconName='AiFillFileText' />
                    </div>
                </div>
                <div className="text-gray-500 text-sm">
                    {data.text}
                </div>
            </div>
        </>
    )
}

export default Stats
