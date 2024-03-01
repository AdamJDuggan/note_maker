---
title: Build up flat XML from CSV in PHP
keywords: xml convert csv php 
createdAt: Fri Mar 01 2024 12:56:26 GMT+0000 (Greenwich Mean Time)
---

Loop through the data from the parsed CSV and build up a flat XML string


```
public function arrayToFlatXml($elements, $headers)
{    
    $xmlString = '';
    foreach($elements as $elementKey => $element) {
        $count = 1;
        $xmlString .= "<" . array_keys($element)[0] ." value='". array_values($element)[0] ."'>".PHP_EOL;
        while($count <= count($headers) - 1) {
            $xmlString .= "\t<" . trim(array_keys($element)[$count]). ">".trim(array_values($element)[$count]). "</" . trim(array_keys($element)[$count]). ">".PHP_EOL;
            $count++;
        } 
        $xmlString .= "<" . array_keys($element)[0] ."/>".PHP_EOL;
    }
    return $xmlString;
}
```
