import { useState } from "react";
import "./App.css";
import swal from "sweetalert";
import Todo from "./components/Todo";
import {
  Grid,
  GridItem,
  Box,
  Avatar,
  Listbox,
  createListCollection,
  Button,
  Card,
  Flex,
} from "@chakra-ui/react";

function App() {
  type TodoType = {
    id: string;
    title: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<TodoType[]>([]);

  const [value, setValue] = useState<string>("");

  const addTodo = (title: string) => {
    console.log(title);
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);

    return true;
  };

  const deleteTodo = (id: string) => {
    swal({
      title: "آیا از حذف تودو اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        setTodos(todos.filter((todo) => todo.id !== id));

        swal({
          title: "تودوی مورد نظر با موفقیت حذف شد",
          icon: "success",
        });
      }
    });

    return true;
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );

    return true;
  };

  const handleAdd = (event: React.SubmitEvent<HTMLFormElement>) => {
    // alert('slm')
    event.preventDefault();
    if (value) {
      addTodo(value);
      swal({
        title: "تودوی مورد نظر با موفقیت افزوده شد",
        icon: "success",
      });
      setValue("");
    }
  };

  const collection = createListCollection({
    items: [
      { label: "Naruto", value: "naruto", category: "Anime" },
      { label: "One Piece", value: "one-piece", category: "Anime" },
      { label: "Dragon Ball", value: "dragon-ball", category: "Anime" },
      {
        label: "مهشاد فریدیار",
        value: "the-shawshank-redemption",
        category: "همکارانم ",
      },
      {
        label: "فاطمه سیف الهی",
        value: "the-godfather",
        category: "همکارانم ",
      },
      {
        label: "زهرا مجتهدی",
        value: "the-dark-knight",
        category: "همکارانم ",
      },
      {
        label: "مهشاد فریدیار",
        value: "the-shawshank-redemption",
        category: "همکارانم ",
      },
      {
        label: "فاطمه سیف الهی",
        value: "the-godfather",
        category: "همکارانم ",
      },
      {
        label: "زهرا مجتهدی",
        value: "the-dark-knight",
        category: "همکارانم ",
      },
      {
        label: "مهشاد فریدیار",
        value: "the-shawshank-redemption",
        category: "همکارانم ",
      },
      {
        label: "فاطمه سیف الهی",
        value: "the-godfather",
        category: "همکارانم ",
      },
      {
        label: "زهرا مجتهدی",
        value: "the-dark-knight",
        category: "همکارانم ",
      },
      {
        label: "مهشاد فریدیار",
        value: "the-shawshank-redemption",
        category: "همکارانم ",
      },
      {
        label: "فاطمه سیف الهی",
        value: "the-godfather",
        category: "همکارانم ",
      },
      {
        label: "زهرا مجتهدی",
        value: "the-dark-knight",
        category: "همکارانم ",
      },
    ],
    groupBy: (item) => item.category,
  });

  return (
    <div className="container">
      <Grid
        // h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem className="bg-red" colSpan={1}>
          <Box>
            <Avatar.Root shape="full" size="lg">
              <Avatar.Fallback name="Random User" />
              <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
            </Avatar.Root>
            سلام حانیه
            <Listbox.Root collection={collection}>
              <Listbox.Content divideY="1px">
                {collection.group().map(([category, items]) => (
                  <Listbox.ItemGroup key={category}>
                    <Listbox.ItemGroupLabel>{category}</Listbox.ItemGroupLabel>
                    {items.map((item) => (
                      <Listbox.Item item={item} key={item.value}>
                        <Listbox.ItemText>{item.label}</Listbox.ItemText>
                        <Listbox.ItemIndicator />
                      </Listbox.Item>
                    ))}
                  </Listbox.ItemGroup>
                ))}
              </Listbox.Content>
            </Listbox.Root>
          </Box>
        </GridItem>

        <GridItem className="bg-blueviolet" colSpan={4}>
          <Box>
            <div className="box-todo">
              <h1>To Do List </h1>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="چیزی تایپ کنید ..."
              />
              <button className="btn" onClick={handleAdd}>افزودن وظیفه</button>

              <div className="todolist">
                <ul>
                  {todos.map((todo) => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      deleteTodo={deleteTodo}
                      toggleComplete={toggleComplete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </Box>
          <Flex gap="4">
            <Box>
              <Card.Root width="320px" variant="elevated">
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Card.Title mb="2">Nue Camp</Card.Title>
                  <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            <Box>
              <Card.Root width="320px" variant="elevated">
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Card.Title mb="2">Nue Camp</Card.Title>
                  <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            <Box>
              <Card.Root width="320px" variant="elevated">
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Card.Title mb="2">Nue Camp</Card.Title>
                  <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            <Box>
              <Card.Root width="320px" variant="elevated">
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Card.Title mb="2">Nue Camp</Card.Title>
                  <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
