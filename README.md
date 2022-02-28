## endPoints
# Ironhack-Project-3


| Method | URL    | Description                | Protected |
| :-------- | :------- | :------------------------- | :------- |
| 
POST| `/register`|Registro como Usuario| Yes
POST| `/login`| Inicio Sesion| Yes
PUT|`/profile/:user_id`| Editar perfil| Yes
DELETE|`/profile/:user_id`| Eliminar un perfil| Yes

GET|`/vehicle/allvehicles`| Ver todos los vehiculos| Yes
POST| `/vehicle/create`| Crear tus Vehículos | Yes
GET| `/vehicle/:vehicle_id`| Detalles vehiculo| Yes
PUT|`/vehicle/:vehicle_id`| Formulario editar tus vehículos| Yes
DELETE| `/vehicle/:vehicle_id`| Eliminar vehículo| Yes

GET| `/alert/allAlerts`| Ver todas las alertas| Yes
POST|`/alert/create`|Crear nueva alerta| Yes
PUT|`/alert/:alert_id`| Editar alertas|Yes
GET|`/alert/:alert_id`| Detalles una alerta|Yes
DELETE|`/alert/:alert_id`| Eliminar una alerta|Yes
