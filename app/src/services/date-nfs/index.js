import { DateNfsWrapper } from "./DateNfsWrapper";

export const dateNfsService = ({ registerAction }) => {
    registerAction({
        hook: '$REACT_ROOT_WRAPPER',
        handler: { component: DateNfsWrapper }
    })
}