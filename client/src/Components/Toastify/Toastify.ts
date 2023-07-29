import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export const notify = (msg: string, type: ToastType): void => {
    const options: ToastOptions = {
        position: toast.POSITION.TOP_RIGHT,
    };

    toast[type](msg, options);
};
