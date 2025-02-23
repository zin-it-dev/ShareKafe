import { Request, Response } from 'express'

import { getAllItems } from '@/services/item.service'

export const getItems = async (req: Request, res: Response) => {
    const items = await getAllItems()
    res.status(200).json({
        message: 'List of all items',
        data: items
    })
}
