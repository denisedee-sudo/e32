import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
// import SupportAuthor from "../components/supportAuthor"
import { Link } from "react-router-dom";
import {
    SupportAuthor
  } from "../components";
const Manga = () => {
    return(
        <div className='container-fluid bg-dark'>
            <div className='row'>
                {/* <div className='col-1 bg-dark'></div> */}
                <div className='class="col-11 col-lg-8 bg-dark'>
                    <h2 className="text-white text-center pt-5 pb-1">Chapters</h2>
                    <br />
                    <div className='d-grid container pt-5'>
                    <Link to="/e32/Reader" className="text-decoration-none text-info ">
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 204</button>
                    </Link>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 203</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 202</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 201</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 200</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 199</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 198</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 197</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 196</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 195</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 194</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 193</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 192</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 191</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 190</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 189</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 188</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 187</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 186</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 185</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 184</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 183</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 182</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 181</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 180</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 179</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 178</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 177</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 176</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 175</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 174</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 173</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 172</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 171</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 170</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 169</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 168</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 167</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 166</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 165</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 164</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 163</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 162</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 161</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 160</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 159</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 158</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 157</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 156</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 155</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 154</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 153</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 152</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 151</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 150</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 149</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 148</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 147</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 146</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 145</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 144</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 143</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 142</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 141</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 140</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 139</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 138</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 137</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 136</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 135</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 134</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 133</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 132</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 131</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 130</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 129</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 128</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 127</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 126</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 125</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 124</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 123</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 122</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 121</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 120</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 119</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 118</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 117</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 116</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 115</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 114</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 113</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 112</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 111</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 110</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 109</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 108</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 107</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 106</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 105</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 104</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 103</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 102</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 101</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 100</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 99</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 98</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 97</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 96</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 95</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 94</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 93</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 92</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 91</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 90</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 89</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 88</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 87</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 86</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 85</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 84</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 83</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 82</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 81</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 80</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 79</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 78</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 77</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 76</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 75</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 74</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 73</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 72</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 71</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 70</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 69</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 68</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 67</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 66</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 65</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 64</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 63</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 62</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 61</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 60</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 59</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 58</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 57</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 56</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 55</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 54</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 53</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 52</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 51</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 50</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 49</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 48</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 47</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 46</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 45</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 44</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 43</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 42</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 41</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 40</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 39</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 38</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 37</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 36</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 35</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 34</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 33</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 32</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 31</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 30</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 29</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 28</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 27</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 26</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 25</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 24</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 23</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 22</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 21</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 20</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 19</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 18</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 17</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 16</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 15</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 14</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 13</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 12</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 11</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 10</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 9</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 8</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 7</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 6</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 5</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 4</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 3</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 2</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 1</button>
                        <button className='btn btn-outline-info hover-big mt-1 ms-2 mb-1 d-block w-100'> Chapter 0</button>
                    </div>
                </div>
                <div className="col-1 col-lg-4 bg-dark pt-5 visible-lg">
                    <SupportAuthor></SupportAuthor>
                </div>
            </div>
        </div>
        
    );
   }
   
   export default Manga;