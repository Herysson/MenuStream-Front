import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import { productData } from "../../interface/productData";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface InputProps {
    label: string,
    value: any,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} className="form-control"></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [availability, setAvailability] = useState(true);
    const [image, setImage] = useState("");
    const { mutate, isSuccess } = useProductDataMutate();

    const submit = () => {
        const productData: productData = {
            name,
            description,
            price,
            category,
            availability,
            image
        };
        mutate(productData);
    };

    useEffect(() => {
        if (isSuccess) closeModal();
    }, [isSuccess, closeModal]);

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add a new item to the menu</h5>
                        <button onClick={closeModal} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="input-container">
                            <Input label="name" value={name} updateValue={setName} />
                            <Input label="description" value={description} updateValue={setDescription} />
                            <Input label="price" value={price} updateValue={setPrice} />
                            <Input label="category" value={category} updateValue={setCategory} />
                            <Input label="availability" value={availability} updateValue={setAvailability} />
                            <Input label="image" value={image} updateValue={setImage} />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeModal} className="btn btn-secondary">Close</button>
                        <button type="button" onClick={submit} className="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
