CaC24127_GRP9: DATOS
--------------------
Git Repositorios:
FontEnd TP1: https://github.com/mwcastellan/tpo_nodejs_fron

-----------------------------------------------------------------------
BackEnd TP2:
    Script Base Datos.......: https://github.com/mwcastellan/tpo_nodejs_bd
    BackEnd.................: https://github.com/mwcastellan/tpo_nodejs_bb
    FrontEnd Testing BackEnd: https://github.com/mwcastellan/tpo_nodejs_bf

Base Datos MySQL:
    https://www.alwaysdata.com/en/
    Login: mcastellan@yahoo.com Clave: (Me la piden...)
    Base de Datos: MYSQL --> Esquema: MCASTELLAN_GRP9 --> Usuario: 363082_grp9 Clave: CaC24127GRP9
    Desde la web se puede ingresar con: https://phpmyadmin.alwaysdata.com/
    Tambien se pueden conectar con WorkBench MySQL o desde el backend es: 
        MySQL host: mysql-mcastellan.alwaysdata.net 
        Usuario: 363082_grp9 
        Clave: CaC24127GRP9

APLICACION:
BackEnd: https://tpo-nodejs-bb.vercel.app/

// Ingreso a Pedidos
app.use("/pedidos", pedidosRouter);
router.get("/ver", AutorizarClientes, TraerPedidos);
router.get("/ver/:id", AutorizarClientes, TraerUnPedido);
router.post("/crear", AutorizarClientes, ValidarPedido, CrearUnPedido);
router.put(
  "/actualizar/:id",
  AutorizarClientes,
  ValidarPedido,
  ActualizarUnPedido
);
router.delete("/borrar/:id", AutorizarClientes, BorrarUnPedido);

// Ingreso a Productos
app.use("/productos", productosRouter);
router.get("/", TraerProductos);
router.get("/:id", TraerUnProducto);

// Ingreso a Productos Ordenados
app.use("/reporte_01", reporte_01Router);
router.get("/", TraerReporte_01);

// Ingreso a Clientes
app.use("/clientes", clientesRouter);
router.post("/login", LoginUnCliente);
router.get("/", TraerClientes);
router.get("/:id", TraerUnCliente);
router.post("/registrar", ValidarCliente, RegistrarUnCliente);
router.put("/:id", ValidarCliente, ActualizarUnCliente);

// Ingreso a Estados Pedidos
app.use("/estado_pedidos", estado_pedidosRouter);
router.get("/", TraerEstado_Pedidos);
router.get("/:id", TraerUnEstado_Pedido);

// Ingreso a Subcategoria
app.use("/subcategoria", subcategoriaRouter);
router.get("/", TraerSubcategoria);

// Ingreso a Logs_Procesos
router.get("/", TraerLogs_procesos);

// Consulta el log de procesos
https://tpo-nodejs-bb.vercel.app/logs_procesos

-----------------------------------------------------------------------

- Está instalado en Vercel y replica automáticamente desde GitHub.
- https://vercel.com/mwcastellans-projects
- La aplicación ya hace referencia a la base en allways.com.
- Siempre está activa.


FrontEnd: https://tpo-nodejs-bf.vercel.app/
- Agregué solo probar la parte front:
https://tpo-nodejs-bf.vercel.app/pedidos.html
https://tpo-nodejs-bf.vercel.app/productos.html (solo ver lista)

- Está instalado en Vercel y replica automáticamente desde GitHub.
- https://vercel.com/mwcastellans-projects
- Siempre está activa.
--------------------------------------------------------------------------------------------------

