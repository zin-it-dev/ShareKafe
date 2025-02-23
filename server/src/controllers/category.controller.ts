import { Request, Response } from 'express'

import { getAllCategories } from '@/services/category.service'

export const getCategories = async (req: Request, res: Response) => {
    const categories = await getAllCategories()
    res.status(200).json({
        message: 'List of all categories',
        data: categories
    })
}
