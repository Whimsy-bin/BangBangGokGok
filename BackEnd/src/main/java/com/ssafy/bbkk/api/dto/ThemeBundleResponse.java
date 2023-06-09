package com.ssafy.bbkk.api.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public class ThemeBundleResponse {

    private String label; // 해당 테마 목록의 라벨
    private List<PreviewThemeResponse> themes; // 해당 테마 목록

}