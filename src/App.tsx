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
  Field,
  Input,
  Portal,
  Select,
} from "@chakra-ui/react";

import allProjects from "./utils/allProjects";
import allUsers from "./utils/allUsers";
import { FaPalette } from "react-icons/fa";
// import { IoMdAddCircleOutline } from "react-icons/io";

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
  const [modalAddStudents, setModalAddStudents] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<boolean>(false);

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

  const frameworks = createListCollection({
    items: [
      { label: "حامد طاهری", value: "react" },
      { label: "امی پور درخشان", value: "vue" },
      { label: "هانی خصاف", value: "angular" },
      { label: "دانیال فراهانی", value: "svelte" },
      { label: "محمد شیوایی", value: "nextjs" },
      { label: "ابوالفضل فرزین خواه", value: "nuxtjs" },
    ],
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
            <Flex>
              <Flex align="center">
                <Avatar.Root shape="full" size="lg">
                  <Avatar.Fallback name="Random User" />
                  <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                </Avatar.Root>
                <div className="mx-3">سلام مربی</div>
              </Flex>
              <IoMdAddCircleOutline onClick={() => setModalAddStudents(true)} />
                <FaPalette />

            </Flex>

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
              bg="brand.500"
              variant="solid"
              onClick={showModalAddTask}
            >
              <IoMdAdd />
              افزودن وظیفه
            </Button>
          </HStack>
          {modalAddTask && (
            <Box className="modal_position w-2/3 h-[400px]">
              <Card.Root variant="elevated">
                <Card.Body gap="2">
                  <Flex gap="4" justify="space-between">
                    <Card.Title mb="2">افزودن وظیفه</Card.Title>
                    <IoMdCloseCircleOutline
                      onClick={() => setModalAddTask(false)}
                    />
                  </Flex>

                  <Card.Description>
                    <Field.Root invalid>
                      <Input
                        className="border border-solid !border-indigo-500"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="عنوان وظیفه..."

                      />
                      {errorInput && (
                        <Field.ErrorText>
                          این فیلد باید حتما پر شده باشد !
                        </Field.ErrorText>
                      )}
                    </Field.Root>

                    <Listbox.Root
                      collection={frameworks}
                      selectionMode="multiple"
                      maxW="320px"
                    >
                      <Listbox.Label>افزودن لیست</Listbox.Label>
                      <Listbox.Content>
                        {frameworks.items.map((framework) => (
                          <Listbox.Item item={framework} key={framework.value}>
                            <Listbox.ItemText>
                              {framework.label}
                            </Listbox.ItemText>
                            <Listbox.ItemIndicator />
                          </Listbox.Item>
                        ))}
                      </Listbox.Content>
                    </Listbox.Root>

                    <Select.Root collection={allUsers} size="sm" width="320px">
                      <Select.HiddenSelect />
                      <Select.Label>Select framework</Select.Label>
                      <Select.Control>
                        <Select.Trigger>
                          <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                          <Select.Indicator />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Portal>
                        <Select.Positioner>
                          <Select.Content>
                            {allUsers.items.map((framework) => (
                              <Select.Item
                                item={framework}
                                key={framework.nationalcode}
                              >
                                {framework.name} - {framework.lastname}
                                <Select.ItemIndicator />
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Positioner>
                      </Portal>
                    </Select.Root>

                    <div>تعریف شده توسط : خودم</div>

                    <div>انتخاب پروژه</div>
                    <Select.Root collection={allProjects} size="sm" width="320px">
                      <Select.HiddenSelect />
                      <Select.Label>Select framework</Select.Label>
                      <Select.Control>
                        <Select.Trigger>
                          <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                          <Select.Indicator />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Portal>
                        <Select.Positioner>
                          <Select.Content>
                            {allProjects.items.map((framework) => (
                              <Select.Item
                                item={framework}
                                key={framework.value}
                              >
                                {framework.label}
                                <Select.ItemIndicator />
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Positioner>
                      </Portal>
                    </Select.Root>

                    <div>مسئول انجام : حامد طاهری</div>
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
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  {/* <Button variant="outline">View</Button> */}
                  <Button onClick={handleAdd}>افزودن</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
          )}

          {modalAddStudents && (
            <Box className="modal_position w-2/3 h-[400px]">
              <Card.Root variant="elevated">
                <Card.Body gap="2">
                  <Flex gap="4" justify="space-between">
                    <Card.Title mb="2">افزودن دانشجو</Card.Title>
                    <IoMdCloseCircleOutline
                      onClick={() => setModalAddStudents(false)}
                    />
                  </Flex>

                  <Card.Description>
                    <Field.Root invalid>
                      <Input
                        className="border border-solid !border-indigo-500"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="عنوان وظیفه..."
                        />
                      {errorInput && (
                        <Field.ErrorText>
                          این فیلد باید حتما پر شده باشد !
                        </Field.ErrorText>
                      )}
                    </Field.Root>

                    <div>تعریف شده توسط : خودم</div>

                    <div>مسئول انجام : حامد طاهری</div>
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
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  {/* <Button variant="outline">View</Button> */}
                  <Button onClick={handleAdd}>افزودن</Button>
                </Card.Footer>
              </Card.Root>
            </Box>
          )}
          <Heading size="xl" className="">
            لیست کل وظیفه ها{" "}
          </Heading>
          <Flex gap="4" wrap="wrap">
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
