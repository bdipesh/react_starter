import * as AiIcons from "react-icons/ai";

const DynamicIcon = ({iconName} : {iconName: string}) => {
    const IconComponent = AiIcons[iconName as keyof typeof AiIcons];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className="text-4xl" />;
}

export default DynamicIcon
