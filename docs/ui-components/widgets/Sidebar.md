## Sidebar

Usage example:

```typescript jsx
import { 
    Sidebar,
    SidebarItemType
} from '@project-1114/ui-kit'

 const sidebarItems: SidebarItemType[] = [
    { desciption: <Text size="xl">Link1</Text>, onClick: () => console.log('Click on item 1') },
    { desciption: <Text size="xl">Link2</Text>, onClick: () => console.log('Click on item 2') },
    { desciption: <Text size="xl">Link3</Text>, onClick: () => console.log('Click on item 3') },
]

export function App(){
    return (
        <Sidebar 
            items={sidebar}
        />
    )
}

```
