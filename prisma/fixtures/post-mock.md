訳：「適切なuseStateの使い方」について

# 最初に

※タイトルはあまり気にしないで下さい。

# useStateを使用する際に気を付けたいポイント

1. 関連する状態はまとめることを検討する
2. 矛盾した状態の宣言を避ける
3. 冗長な使い方をしない
4. 重複した状態の宣言は避ける

# 1. 関連する状態はまとめることを検討する

例えば下記のようにOnPointerMoveメソッドを使用しXYの座標を保持したいと思います。

```javascript
const [x, setX] = useState(0)
const [y, setY] = useState(0)

const handlePointerMove = (e) => {
  setX(e.clientX)
  setY(e.clientY)
}
return (
  <div
    onPointerMove={handlePointerMove}
    style={{
      width: '100vw',
      height: '100vh',
    }}
  />
)
```

このように値が必ず同期的に更新される場合は、1つにまとめた方が分かりやすいです。
↓

```javascript
 const [position, setPosition] = useState({ x: 0, y: 0 });

 const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (...
  );

```

また、下記のようなユーザー情報を保持する場合も検討してみてもいいかもしれません。

```javascript
const [userName, setUserName] = useState('')
const [userAge, setUserAge] = useState(0)
```

↓

```javascript
const [userInfo, setUserInfo] = useState({ name: '', age: 0 })
```

# 2. 矛盾した状態の宣言を避ける

下記のような、よくあるフォームを例とします。

```javascript
export default function Form() {
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSending(true)
    await sendMessage(text)
    setIsSending(false)
    setIsSent(true)
  }

  if (isSent) {
    return <h1>感謝します</h1>
  }

  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        送信
      </button>
      {isSending && <p>送信中...</p>}
    </form>
  )
}
```

良くない点として、setIsSentとsetIsSendingが矛盾した状態であり、複雑な処理になると扱いが難しくなりミスに繋がります。
isSendingとisSentが同時にtrueになることは決してないので、これらを1つの状態変数に置き換える方が分かりやすいです。
↓

```javascript
export default function Form() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('TYPING');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('SENDING');
    await sendMessage(text);
    setStatus('SENT');
  }

  const isSending = status === 'SENDING';
  const isSent = status === 'SENT';

　 return (...
  );
}
```

# 3. 冗長な使い方をしない

下記のようなユーザー情報入力フォームを例とします。

```javascript
export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
    setFullName(e.target.value + ' ' + lastName)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
    setFullName(firstName + ' ' + e.target.value)
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        FullName: <span>{fullName}</span>
      </p>
    </>
  )
}
```

良くない点としてfullNameはレンダリング中にfirstNameとlastNameからいつでも計算できるので不要です。
レンダリング中にコンポーネントのpropsや既存のstateから情報を計算できる場合、その情報をstateに入れるべきではありません。
また、firstNameとlastNameもまとめるとスッキリします。
↓

```javascript
const [userName, setUserName] = useState({ firstName: '', lastName: '' })
const fullName = userName.firstName + ' ' + userName.lastName

const handleUserNameChange = (e) => {
  setUserName({ ...userName, [e.target.name]: e.target.value })
}
```

また、propsから渡ってきた値をstateに保持するのも避けるべきです。

```javascript
function Text({ children, color }) {
  const [textColor] = useState(color)

  return <h1 style={{ color: textColor }}>{children}</h1>
}

export default function Example() {
  const [color, setColor] = useState('red')

  return (
    <div>
      <p>
        色を選択
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </p>
      <Text color={color}>色が変わります</Text>
    </div>
  )
}
```

一見すると色が変わりそうですが、変わりません。
理由としてuseStateは最初のレンダリング時にのみ初期化されるからです。
なので下記のようにしましょう。
↓

```javascript
function Text({ children, color }) {
  const textColor = color

  return <h1 style={{ color: textColor }}>{children}</h1>
}
```

これで十分です。
※余談ですが、先程の例を下記のようにしましょうと書いてある記事がいくつかありましたが、無駄なレンダリングを生むので不要かと思います。

```javascript
function Text({ children, color }) {
  const [textColor, setTextColor] = useState(color)

  useEffect(() => {
    setTextColor(color)
  }, [color])

  return <h1 style={{ color: textColor }}>{children}</h1>
}
```

# 4. 重複した状態の宣言は避ける

下記のようなタスク一覧を例とします。

```javascript
const initialItems = [
  { id: 1, title: 'taskA' },
  { id: 2, title: 'taskB' },
  { id: 3, title: 'taskC' },
]

export default function TaskList() {
  const [tasks, setTasks] = useState(initialItems)
  const [selectedTask, setSelectedTask] = useState(tasks[0])

  function handleTaskChange(id, e) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: e.target.value } : task,
      ),
    )
    setSelectedTask((task) =>
      task.id === id ? { ...task, title: e.target.value } : task,
    )
  }

  return (
    <>
      <h2>タスク一覧</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <input
              value={task.title}
              onChange={(e) => {
                handleTaskChange(task.id, e)
              }}
            />
            <button
              onClick={() => {
                setSelectedTask(task)
              }}
            >
              選択
            </button>
          </li>
        ))}
      </ul>
      <p>今日のタスクは {selectedTask.title}</p>
    </>
  )
}
```

良くない点として、tasksとselectedTaskで重複したデータを扱っていることにより、タスクの編集をする際にわざわざをselectedTaskを更新をしてあげないといけない状態です。
そこで重複を解消しidだけを取得し、selectedTaskを計算するようにします。
↓

```javascript
function TaskList() {
  const [tasks, setTasks] = useState(initialItems)
  const [selectedTaskId, setSelectedTaskId] = useState(0)

  function handleTaskChange(id, e) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: e.target.value } : task,
      ),
    )
  }

  const selectedTask = tasks.find((task) => task.id === selectedTaskId)

  return (
    <>
      <h2>タスク一覧</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              value={task.title}
              onChange={(e) => {
                handleTaskChange(task.id, e)
              }}
            />
            <button
              onClick={() => {
                setSelectedTaskId(task.id)
              }}
            >
              選択
            </button>
          </li>
        ))}
      </ul>
      <p>今日のタスクは {selectedTask.title}</p>
    </>
  )
}
```

# 最後に

以上になります。
useStateを使う際は、本当にローカル変数だと不十分なのか、を疑って使うようにしましょう。
また、レンダリング中にコンポーネントのpropsや既存のstateから情報を計算できる場合、その情報をそのstateに入れるべきでないといった点に関しては、無駄なレンダリングにも繋がるので気を付けたいです。

# 参考にした記事

https://beta.reactjs.org/
