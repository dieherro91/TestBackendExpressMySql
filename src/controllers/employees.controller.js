

export const getEmployees=(req,res)=>{
    res.send('Creando empleados')
}

export const createEmployees=(req,res)=>{
    console.log("datos",req.body)
    res.send('Obteniendo empleados')
}

export const putEmployees=(req,res)=>{
    res.send('Actualizando empleados')
}

export const deleteEmployees = (req,res)=>{
    res.send('Eliminando empleados')
}

export const patchEmployees=(req,res)=>{
    res.send('Patch empleados')
}