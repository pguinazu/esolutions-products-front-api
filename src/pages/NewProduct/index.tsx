import { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import { useCreateProductMutation } from '../../services/productsService';

const ProductForm = () => {

    const [createProduct] = useCreateProductMutation();

    const [file, setFile] = useState<string>('');
    const [errors, setErrors] = useState<any>({});

    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: ""
    });

    const handleChangeImage = (e: any) => {
        setFile(URL.createObjectURL(e.target?.files[0]));
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validators
        if (value.trim() === '' && e.target.required) {
            setErrors({
                ...errors,
                [name]: 'Este campo es obligatorio.'
            });
        } else if (e.target.type === 'number' && !Number.isFinite(Number(value))) {
            setErrors({
                ...errors,
                [name]: 'Debe ser un número válido.'
            });
        } else {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const handleSubmit = () => {
        console.log(formData)
        createProduct(formData)
    };

    return (
        <Layout>
            <Typography variant="h3" gutterBottom>
                Create a New Product
            </Typography>
            <Typography variant="h6" gutterBottom>
                Complete inputs with product information
            </Typography>
            <Container className='mt-12'>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Identifier number"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                            error={errors.id !== null}
                            helperText={errors.id}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            error={errors.title !== null}
                            helperText={errors.title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            error={errors.description !== null}
                            helperText={errors.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            error={errors.category !== null}
                            helperText={errors.category}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type='number'
                            label="Rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                            error={errors.rating !== null}
                            helperText={errors.rating}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type='number'
                            label="Stock"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                            error={errors.stock !== null}
                            helperText={errors.stock}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={handleChangeImage}
                        />
                        {/* preview of file */}
                        {file && <img src={file} className='w-60 h-60 object-cover rounded-lg' />}
                        <label htmlFor="raised-button-file">
                            <Button
                                component="span"
                            >
                                Upload Image
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            error={errors.price !== null}
                            helperText={errors.price}
                            InputProps={{
                                inputProps: {
                                    step: 0.01,
                                    min: 0,
                                    style: { textAlign: 'left' },
                                    pattern: '\\d+(\\.\\d{1,2})?' // Only decimals
                                },
                                startAdornment: '$'
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Discount Percentage"
                            name="discountPercentage"
                            value={formData.discountPercentage}
                            onChange={handleChange}
                            required
                            error={errors.discountPercentage !== null}
                            helperText={errors.discountPercentage}
                            InputProps={{
                                inputProps: {
                                    step: 0.01,
                                    min: 0,
                                    style: { textAlign: 'left' },
                                    pattern: '\\d+(\\.\\d{1,2})?' // Only decimals
                                },
                                startAdornment: '$'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Create product
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ProductForm;
