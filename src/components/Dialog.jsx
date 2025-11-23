import { useRef, useEffect} from "react";

export default function Dialog({children, isOpen, onClose}){
    let dialogRef = useRef(null)

    useEffect(() => {
        if (dialogRef.current) {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
        }
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} onCancel={onClose}>
            <div>
                {children}

            </div>
        </dialog>
    )
}