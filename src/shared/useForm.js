import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        //callback the onSubmit of when there are no errors
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;
