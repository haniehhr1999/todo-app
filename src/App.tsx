import { useState } from "react";
import "./App.css";
import {
  IoMdAdd,
  IoMdAddCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

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
  HStack,
  Heading,
} from "@chakra-ui/react";
// import { RiMailLine } from "react-icons/ri";

function App() {
  type TodoType = {
    id: string;
    title: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<TodoType[]>([]);

  const [value, setValue] = useState<string>("");
  const [modalAddTask, setModalAddTask] = useState<boolean>(false);

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
      { label: "گفنگو", value: "naruto", category: "اصلی_____" },
      { label: "پروژه ها", value: "one-piece", category: "اصلی_____" },
      { label: "وظایف", value: "dragon-ball", category: "اصلی_____" },
      { label: "یادداشت های من", value: "dragon-ball", category: "اصلی_____" },
      {
        label: "آرزو احمدی",
        value: "arzu-ahmadi",
        category: "دانشجویانم ",
      },
      {
        label: "نگار محمدی",
        value: "negar-mohammadi",
        category: "دانشجویانم ",
      },
      {
        label: "ریحانه کریمی",
        value: "reyhane-karimi",
        category: "دانشجویانم ",
      },
      {
        label: "هستی رضایی",
        value: "hasti-rezaei",
        category: "دانشجویانم ",
      },
      {
        label: "مریم شریفی",
        value: "maryam-sharifi",
        category: "دانشجویانم ",
      },
      {
        label: "سارا حسینی",
        value: "sara-hosseini",
        category: "دانشجویانم ",
      },
      {
        label: "یگانه عباسی",
        value: "yeganeh-abbasi",
        category: "دانشجویانم ",
      },
      {
        label: "الناز موسوی",
        value: "elnaz-mousavi",
        category: "دانشجویانم ",
      },
      {
        label: "نازنین قاسمی",
        value: "nazanin-ghasemi",
        category: "دانشجویانم ",
      },
      {
        label: "بهاره اکبری",
        value: "bahare-akbari",
        category: "دانشجویانم ",
      },
      {
        label: "حدیث نادری",
        value: "hadis-naderi",
        category: "دانشجویانم ",
      },
      {
        label: "سمانه کاظمی",
        value: "samane-kazemi",
        category: "دانشجویانم ",
      },
      {
        label: "پریناز یوسفی",
        value: "parinaz-yousefi",
        category: "دانشجویانم ",
      },
      {
        label: "مهسا رحیمی",
        value: "mahsa-rahimi",
        category: "دانشجویانم ",
      },
      {
        label: "شقایق توکلی",
        value: "shaghayegh-tavakoli",
        category: "دانشجویانم ",
      },
      {
        label: "زهرا ملکی",
        value: "zahra-maleki",
        category: "دانشجویانم ",
      },
      {
        label: "ترانه مرادی",
        value: "taraneh-moradi",
        category: "دانشجویانم ",
      },
      {
        label: "آیدا رستمی",
        value: "aida-rostami",
        category: "دانشجویانم ",
      },
      {
        label: "نرگس امیری",
        value: "narges-amiri",
        category: "دانشجویانم ",
      },
      {
        label: "پریسا جعفری",
        value: "parisa-jafari",
        category: "دانشجویانم ",
      },
    ],
    groupBy: (item) => item.category,
  });

  const showModalAddTask = () => {
    setModalAddTask(true);
  };

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

        <GridItem className=" " colSpan={4}>
          <HStack style={{ margin: "10px 0" }}>
            <Button
              colorPalette="teal"
              variant="solid"
              onClick={showModalAddTask}
            >
              <IoMdAdd />
              افزودن وظیفه
            </Button>
          </HStack>
          {modalAddTask && (
            <Box>
              <div className="box-todo">
                <Flex gap="4" justify="space-between">
                  <h1>افزودن وظیفه</h1>

                  <IoMdCloseCircleOutline
                    onClick={() => setModalAddTask(false)}
                  />
                </Flex>

                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="چیزی تایپ کنید ..."
                />
                <button className="btn" onClick={handleAdd}>
                  افزودن وظیفه
                </button>

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
          )}
          <Heading size="2xl" className="">
            لیست کل وظیفه ها{" "}
          </Heading>
          <Flex gap="4">
            <Box>
              <Card.Root
                width="320px"
                variant="elevated"
                className="!bg-[#cce3de]"
              >
                <Card.Body gap="2">
                  <Card.Title mb="2">اتمام ویدیو های ریداکس</Card.Title>
                  <Card.Description>
                    حدود 90 ویدیو هست ک 45 تاش دیده شده از سایت تاپلرن
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            <Box>
              <Card.Root
                width="320px"
                variant="elevated"
                className="!bg-[#f7cad0]"
              >
                <Card.Body gap="2">
                  <Card.Title mb="2">پروژه تایپ اسکریپت</Card.Title>
                  <Card.Description>
                    پروژه تودو لیست نا تمام مانده است و باید لینک آن در رزومه
                    اصلاح شود
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
            <Box>
              <Card.Root
                width="320px"
                variant="elevated"
                className="!bg-[#fdfcdc]"
              >
                <Card.Body gap="2">
                  <Card.Title mb="2">مرتب کردن گیتهاب</Card.Title>
                  <Card.Description>
                    ریپازیتوری های گیتهاب بسیار شلوغه و خیلی هاش بدرد نمیخوره
                    اونا رو پاک کن.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            </Box>

            <Box>
              <div
                onClick={showModalAddTask}
                className="rounded-md h-[198px] w-[320px] flex justify-center items-center"
                role="button"
                style={{ border: "2px dashed #e0e1dd", cursor: "pointer" }}
              >
                <IoMdAdd />
              </div>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
