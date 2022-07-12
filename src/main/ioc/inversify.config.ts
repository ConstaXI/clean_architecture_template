import { modelsModule } from "./modelsModule"
import { controllerModule } from "./controllerModule"
import { repositoryModule } from "./repositoryModule"
import { servicesModule } from "./servicesModule"
import { useCaseModule } from "./useCaseModule"
import { container } from "../../shared/ioc/container"

container.load(servicesModule)
container.load(repositoryModule)
container.load(useCaseModule)
container.load(controllerModule)
container.load(modelsModule)
