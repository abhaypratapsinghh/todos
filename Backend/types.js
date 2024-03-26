const { sign } = require('jsonwebtoken');
const z = require('zod');


const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(5)
})

const createSchema = z.object({
    title: z.string(),
    description: z.string(),
    id: z.string()
        
})

const updateSchema = z.object({
    title: z.string(),
    description :z.string(),
    id: z.string()
});

module.exports = {
    createSchema: createSchema,
    updateSchema: updateSchema,
    signupSchema:signupSchema
}