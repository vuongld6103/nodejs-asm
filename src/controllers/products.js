import Product from "../models/Product"
import productValidation from "../validations/products"

export const create = async (req, res) => {
    try {
        const { error } = productValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const data = await Product.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Create product failed",
            })
        }
        return res.status(200).json({
            message: "Create product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const data = await Product.find({})
        if (!data) {
            return res.status(404).json({
                message: "Get all product failed",
            })
        }
        return res.status(200).json({
            message: "Get all product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Get detail product failed",
            })
        }
        return res.status(200).json({
            message: "Get detail product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Delete product failed",
            })
        }
        return res.status(200).json({
            message: "Delete product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const update = async (req, res) => {
    try {
        const { error } = productValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "Update product failed",
            })
        }
        return res.status(200).json({
            message: "Update product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}