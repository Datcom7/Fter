import { useState ,useEffect, } from "react"
import { Button, Container, Box } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AbcIcon from '@mui/icons-material/Abc';
import './App.css'
/*import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Pagination} from "swiper/modulse"*/



export default function ArtemGay(props) {
  const [bab, setBab] = useState(0)
  const Cats = ['Cat0.jpg', 'Cat1.jpg', 'Cat2.jpg', 'Cat3.jpg']
  function handleNext() {
    if (bab === Cats.length - 1) {
      setBab(0)
    }
    else {
      setBab(bab + 1)
    }
  }
  function handlePrev() {
    if (bab === 0) {
      setBab(3)
    }
    else {
      setBab(bab - 1)
    }
  }
  useEffect(()=>{
    let timer = setTimeout(handleNext,3000)
    return () => clearTimeout(timer)
  },[bab])

  


  return (
    <Container className='Main'>
      <Box className='Text'>
        <Box>
          <h1>Cat
          </h1>
          <p>cat (от англ. concatenate) — утилита UNIX, выводящая последовательно указанные файлы (или устройства),
            таким образом, объединяя их в единый поток. Если вместо имени файла указывается «-», то читается стандартный ввод.
          </p>
          <p className='BorderedText'>cat a.txt - b.txt {'>'} abc.txt <br />
            cat /dev/null {'>'} file_to_clear.txt</p>
          <p>Иногда (в учебных примерах) используется в качестве первой ступени конвейера обработки текста утилитами sed, awk и так далее,
            хотя в большинстве случаев её можно заменить оператором {'\'<\''} либо передачей имени файла в качестве аргумента,
            что позволяет избежать создания отдельного процесса. Может использоваться в следующих случаях:
          </p>
          <ul>
            <li>когда требуется вывести куда-то файл без изменений;
            </li>
            <li>когда требуется объединить более одного файла (например, части одного файла, разбитого командой split),
              либо файл(ы) с потоком стандартного ввода;
            </li>
            <li>когда требуется просмотреть содержимое файла.
            </li>
          </ul>
        </Box>
        <Box>
          <h1 className='Title2'>История
          </h1>
          <p>
            cat была частью ранних версий Unix, например, версии 1, и заменила pr, утилиту PDP-7 для копирования одного файла на экран.
            Версия cat в GNU Coreutils была написана Торбьорном Гранлундом и Ричардом Столлманом.
          </p>
        </Box>
        <Box>
          <h1 className='Title2'>
            Аналоги в других операционных системах
          </h1>
          <p>
            В Windows для аналогичных целей можно использовать команду следующего вида:
          </p>
          <p className='BorderedText'>
            <span className="C">copy</span> /b a.txt + b.txt abc.txt
          </p>
          <p>
            Для вывода содержания файла на экран можно использовать команду type.
          </p>
        </Box>
      </Box>
      {/*<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide  >
          <img width={'300px'} height={'300px'} src={`./${Cats[bab]}`} className="Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={'300px'} height={'300px'} src={`./${Cats[(bab + 1) % Cats.length]}`} className="Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={'300px'} height={'300px'} src={`./${Cats[(bab + 2) % Cats.length]}`} className="Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={'300px'} height={'300px'} src={`./${Cats[(bab + 3) % Cats.length]}`} className="Img" />
        </SwiperSlide>
      </Swiper>*/}

      <Box className='ImageWithButtons'>
        <Box className = 'Images'>
          <img width={'300px'} height={'300px'} src={`./${Cats[bab]}`} className="Img" />
        </Box>
        <Box className='Buttons'>
          <Button onClick={handleNext} className='ButtonLR' >
            <ArrowLeftIcon />
          </Button>
          <Button onClick={handlePrev} className='ButtonLR'>
            <ArrowRightIcon />
          </Button>
        </Box>
      </Box> 
    </Container>
  )
}