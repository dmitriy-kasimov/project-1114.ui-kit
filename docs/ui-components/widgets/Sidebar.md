## Sidebar

Usage example:

```typescript jsx
import { 
    Sidebar,
    Link,
    HStack,
    Text,
    Skeleton
} from '@project-1114/ui-kit'

const sidebarItems = [
    <Link>
        <Text color={'main'}>Link1</Text>
    </Link>,
    <HStack align={'center'} gap={'s'}>
        <Skeleton width={30} height={30} border={'50%'} />
        <Link>
            <Text color={'main'}>Link2</Text>
        </Link>
    </HStack>,

    <Text color={'main'}>Link3</Text>
]

export function App(){
    return (
        <Sidebar 
            items={sidebar}
        />
    )
}

```
