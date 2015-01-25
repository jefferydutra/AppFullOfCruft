<%@ Page Title="" Language="C#" MasterPageFile="~/WebFormsStuff/SearchMaster.Master" AutoEventWireup="true" CodeBehind="HotelSearch.aspx.cs" Inherits="AppFullOfCruft.WebFormsStuff.HotelSearch" %>

<asp:Content ID="Title" ContentPlaceHolderID="PageTitle" runat="server">
    Search Page
</asp:Content>


<asp:Content ID="Head" ContentPlaceHolderID="head" runat="server">

</asp:Content>

<asp:Content ID="CriteriaContent" ContentPlaceHolderID="CriteraContent" runat="server">
    <div id="searchCriteria" style="margin: auto; width: 1000px;">
            <table style="vertical-align: middle; width: 100%;" cellpadding="0" cellspacing="0">
                <tr style="text-align: left; vertical-align: middle; height: 42px;">
                    <td style="text-align: left; width: 55px;">
                        City
                    </td>
                    <td style="width: 90px;">
                        <asp:DropDownList ID="CitySelection" runat="server">
                            <asp:ListItem Text="Cambridge" Value="Cambridge"/>
                            <asp:ListItem Text="Kitchener" Value="Kitchener"/>
                            <asp:ListItem Text="Waterloo" Value="Waterloo"/>
                        </asp:DropDownList>
                    </td>
                    <td id="divAllFlightCriteria" valign="middle">
                        <div>
                            <table id="tbAllFlightCriteria" style="table-layout: fixed; width: 100%;">
                                <tr>
                                    <td style="width: 50px;">
                                        Guests
                                    </td>
                                    <td style="width: 130px;">
                                        <table>
                                            <tr>
                                                <td>
                                                    <asp:TextBox ID="tbGuests" runat="server" Width="80" />
                                                </td>
                                                <td>
                                                    <div id="guestInformationDialog" title="Guest information" style="display: none">
                                                        <span>Extra information when guests blah blah blah ... </span>
                                                    </div>
                                                    <span id="guestInformationTooltip">
                                                            <img src="../Content/Images/QuestionMark.png" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td style="width: 150px;">
                                        Star Rating
                                    </td>
                                    <td style="width: 150px;">
                                        <asp:DropDownList ID="starRatingSelection" runat="server">
                                            <asp:ListItem Text="All" Value="All"/>
                                            <asp:ListItem Text="2+" Value="2+"/>
                                            <asp:ListItem Text="3+" Value="3+"/>
                                            <asp:ListItem Text="4+" Value="4+"/>
                                        </asp:DropDownList>
                                    </td>
                                    <td style="text-align: right; width: 70px;">
                                        <asp:Button ID="btnSearch" runat="server" ClientIDMode="Static"
                                            OnClientClick="CriteriaSearch(); return false;" Text="Search" class="btnSearch" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
    </div>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="MainContent" runat="server">

</asp:Content>

<asp:Content ID="JavaScript" ContentPlaceHolderID="JavaScriptContent" runat="server">
    <script src="../Scripts/hotelSearcher/search.js"></script>
    <script type="text/javascript">+

        function CriteriaSearch() {
            clearResults();
            $('#btnHiddenSearch').click();
        }

        function MyFlightsSearch() {
            clearResults();
            $('#btnHiddenMyFlightSearch').click();
        }

        function clearResults() {
            try {
                var containingDiv = $("#divFlightResults");
                containingDiv.wrapAll('<div id="loadingOverlay" />').prepend('<div style="width: 100%; text-align: center;"> Loading ... </div>');
            }
            catch (ex)
            { }
        }
    </script>
</asp:Content>