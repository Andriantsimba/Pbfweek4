import React, {Component} from "react";
import Post from "../Component/Post";
import './BlogPost.css';

class BlogPost extends Component{

    state = {
        listArtikel: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariApi => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariApi
                })
            })
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return<Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi -
                Politeknik Negeri Malang" /> */}
                {/* <div class="artikel">
                <div class="gambar-artikel">
                    <image src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
                    </div>
                    <div class="koten-artikel">
                        <div class="judul-artikel">Judul Artikel</div>
                        <p class="isi-artikel">Isi Article</p>
                    </div>
            </div> */}
            </div>
        )
    }
}

export default BlogPost;